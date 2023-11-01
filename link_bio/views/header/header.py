import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size as Size
def header() -> rx.Component:
    return rx.vstack(
            rx.hstack(
                rx.avatar(name="Diego Huh", size="xl"),
                rx.vstack(
                        rx.heading(
                            "DIEGO HUH COB", size = "lg"
                        ), 
                        rx.text(
                            "@diegohc",
                            margin_top = "0px !important    "
                        ), 
                rx.hstack(
                    link_icon("x.com"),   
                    link_icon("x.com"),  
                    link_icon("x.com"), 
                ),    
                align_items = "start"   
                ),
                spacing=Size.DEFAULT.value
            ),
        rx.flex(
            info_text("+1", "Experencia"),
            rx.spacer(),
            info_text("+1", "Experencia"),
            rx.spacer(),
            info_text("+1", "Experencia"),
            width= "100%"
        ),
        rx.text("""estoy creando webs con Reflex.
                Aqui podrás encontrar todos mis link ¡Bienvenid@!"""
        ),
        spacing=Size.BIG.value,
        align_items= "start"

    )