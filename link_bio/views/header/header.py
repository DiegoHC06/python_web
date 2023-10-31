import reflex as rx

def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Diego Huh", size="xl"),
        rx.text("@diegohc"),
        rx.text("hola mi nombres es diego"),
        rx.text("""Soy ingeniero en software para crear paginas web, 
                estoy creando webs con Reflex""")

    )