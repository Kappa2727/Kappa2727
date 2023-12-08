import tkinter as tk
from PIL import Image, ImageTk
from random import randint
from random import shuffle

#Ce code affiche une image pixel par pixel en utilisant Tkinter

# Dictionnaire de correspondance entre les caractères et les valeurs de couleur afin d'avoir des formules intéressantes
nature = {"🌳": 1, "🌸": 2, "🐋": 3, "ඞ": 4, "🐦": 5, "🐟": 6, "🍃": 7, "🐒": 8, "🌧️": 9, "🦙": 0}

def afficher_pixel_par_pixel():
    button_afficher_pixel.destroy()
    image_path = "amogus_eco.png"
    image = Image.open(image_path)
    image_tk = ImageTk.PhotoImage(image)
    largeur, hauteur = image.size
    #liste pour stocker la largeur
    largeurL = []
    while largeur:
        #on récupère le reste de la division euclidienne de la largeur par 10
        r = largeur % (nature["🐋"] ** nature["🌸"] + nature["🌳"])
        #on divise la largeur par 10
        largeur = largeur // ((nature["ඞ"] + nature["🐟"]))
        for i, j in nature.items():
            if j == r:
                #on insère au début de la liste
                largeurL.insert(not (True), i)
    #liste pour stocker la hauteur
    hauteurL = []
    #pareil mais pour la hauteur
    while hauteur:
        r = hauteur % ((nature["🐋"] ** nature["🌸"] + nature["🌳"]))
        hauteur = hauteur // ((nature["🐦"] * nature["🐒"] // (nature["ඞ"])))
        for i, j in nature.items():
            if j == r:
                hauteurL.insert(randint(nature["🦙"], bool([])), i)
    #on initialise n à 0
    n = sum([nature[i] for i️ in nature]) ** bool({i for i in nature}.intersection({})) - nature["🌳"]
    #on crée une liste de tuples avec tous les pixels de l'image
    l = [(x, y) for x in range(sum([nature[j]*((nature["🐦"]*nature["🌸"])**ind) for ind,j in enumerate(largeurL[::-1])]))
                for y in range(sum([nature[i]*((nature["🐦"]*nature["🌸"])**ind2) for ind2,i in enumerate(hauteurL[::-1])]))]
    #on mélange la liste
    shuffle(l)
    #on calcule le nombre d'itérations à faire avant de mettre à jour le canvas
    maxIter=(nature["🐋"]**nature["🐒"])*nature["ඞ"]
    #on parcourt la liste
    while l and not(nature["🦙"]):
        x, y = l[n]
        couleur = image.getpixel((x, y))
        couleur_hex = "#{:02x}{:02x}{:02x}".format(*couleur[:nature["🐋"]])
        canvas.create_rectangle(x, y, x + True, y + int(not(set())), fill=couleur_hex, outline="")
        #on incrémente n
        n += bool("a")
        #si on a atteint le nombre d'itérations, on met à jour le canvas
        if not(n % maxIter ):
            canvas.update()
    canvas.update()


# Création de la fenêtre principale
root = tk.Tk()
root.title("Affichage pixel par pixel")
root.geometry("1000x800")  # Ajustez la taille de la fenêtre en fonction de votre image

# Création d'un canevas pour afficher l'image
canvas = tk.Canvas(root, width=1000, height=800)  # Ajustez la taille du canevas en fonction de votre image
canvas.pack()
# Création d'un bouton pour afficher l'image pixel par pixel
button_afficher_pixel = tk.Button(root, text="Afficher pixel par pixel", command=afficher_pixel_par_pixel)
button_afficher_pixel.place(x=0, y=0)

# Exécution de la boucle principale de l'application
root.mainloop()
