open Opium
open Lwt.Infix

(* Fonction pour calculer les émissions de CO2 en fonction du type de véhicule et de la distance *)
let calculate_co2 vehicle_type distance =
  match vehicle_type with
  | "car" -> 0.22 *. distance
  | "bus" -> 0.11 *. distance
  | "bike" -> 0.0 (* Le vélo n'émet pas de CO2 *)
  | "plane" -> 0.23 *. distance
  | "train" -> 0.03 *. distance
  | _ -> 0.0

(* Fonction pour obtenir le nom lisible d'un type de véhicule *)
let get_vehicle_name = function
  | "car" -> "Voiture"
  | "bus" -> "Autobus"
  | "bike" -> "Vélo"
  | "plane" -> "Avion"
  | "train" -> "Train"
  | _ -> ""

(* Gestionnaire de requêtes pour le calcul des émissions de CO2 *)
let calculate_handler req =
  let open Lwt.Syntax in
  (* Extraction du type de véhicule et de la distance des paramètres de la requête *)
  let* vehicle_type = param req "vehicleType" |> Lwt.map Uri.pct_decode in
  let* distance_str = param req "distance" in
  (* Conversion de la distance en nombre à virgule flottante, avec une valeur par défaut de 0.0 si la conversion échoue *)
  let distance = float_of_string_opt distance_str |> Option.value ~default:0.0 in

  (* Calcul du taux de CO2 et construction du message résultant *)
  let co2_rate = calculate_co2 vehicle_type distance in
  let result_message =
    Printf.sprintf
      "Le taux de CO2 pour %s sur une distance de %.2f km est de %.2f kg."
      (get_vehicle_name vehicle_type)
      distance
      co2_rate
  in

  (* Détermination de la couleur en fonction du taux de CO2 pour le style *)
  let color =
    if co2_rate < 10.0 then "green"
    else if co2_rate < 40.0 then "orange"
    else "red"
  in

  (* Construction de l'élément HTML de résultat avec le message calculé et le style *)
  let result_element =
    Printf.sprintf
      "<p style=\"color:%s;\">%s</p>"
      color
      result_message
  in

  (* Réponse avec l'élément HTML résultant *)
  respond'
    ~headers:(Cohttp.Header.of_list ["Content-Type", "text/html"])
    ~body:(`String result_element)
    (Response.make ~status:`OK ())

(* Configuration du serveur web Opium *)
let () =
  App.empty
  (* Configuration d'une route POST "/calculate" gérée par le calculate_handler *)
  |> App.post "/calculate" calculate_handler
  (* Lancement du serveur *)
  |> App.run_command