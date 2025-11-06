import random

class Participante:
    def __init__(self, id, nombre):
        self.id = id
        self.nombre = nombre
        self.asignacion = None

listaParticipantes = [
    Participante(0, "Cesar Mazariegos"),
    Participante(1, "Daniela Navas"),
    Participante(2, "Papa Fito"),
    Participante(3, "Mama Fivia"),
    Participante(4, "La negra"),
    Participante(5, "Tio Bal"),
    Participante(6, "Tia Zully"),
    Participante(7, "Julio Cesar"),
    Participante(8, "Barbara"),
    Participante(9, "Hugo Andre"),
    Participante(10, "Mynor Lopez"),
    Participante(11, "Marion Lopez"),
    Participante(12, "Duglas"),
    Participante(13, "Wendy"),
    Participante(14, "Seabastian"),
    Participante(15, "Katherine"),
    Participante(16, "Mariana Rene"),
    Participante(17, "Tia O"),
    Participante(18, "Tia E")
]

def ini_asignacion():
    ids = list(range(len(listaParticipantes)))
    random.shuffle(ids)

    # Evitar que alguien se asigne a sí mismo
    for i in range(len(ids)):
        if ids[i] == i:
            # Intercambio con el siguiente (o el primero si está al final)
            j = (i + 1) % len(ids)
            ids[i], ids[j] = ids[j], ids[i]

    for i, participante in enumerate(listaParticipantes):
        participante.asignacion = ids[i]

def imp_asignacion():
    for participante in listaParticipantes:
        asignado = listaParticipantes[participante.asignacion]
        print(f"A: {participante.nombre} le toca: {asignado.nombre}")

def main():
    ini_asignacion()
    imp_asignacion()

if __name__ == "__main__":
    main()


