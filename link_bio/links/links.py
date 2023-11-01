import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size

def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),

        link_button(
            "Twitch",
            "Directos de lunes a vienes",
            "https:// www.twitch.tv/diegohc06"
        ),
        link_button(
            "Youtube",
            "Tutoriales .",
            "https://www.twitch.tv/diegohc06"
        ),
        link_button(
            "LinkEdin",
            "Da el siguiente paso en tu carrera profesional y mejora tu futuro laboral hoy mismo.",
            "https://www.twitch.tv/diegohc06"
        ),
        link_button(
            "X",
            "Sigueme para charlar.",
            "https://www.x.com/@dielhc06"
        ),
        spacing=Size.MEDIUM.value, 
        width="100%"
        
    )