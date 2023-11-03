import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size
import link_bio.constants as const

def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),

        link_button(
            "Twitch",
            "Directos de lunes a vienes",
            const.TWITCH_URL
        ),
        link_button(
            "Youtube",
            "Tutoriales .",
            const.YOUTUBE_URL
        ),
        link_button(
            "LinkEdin",
            "Da el siguiente paso en tu carrera profesional y mejora tu futuro laboral hoy mismo.",
            const.LINKEDIN_URL
        ),
        link_button(
            "X",
            "Sigueme para charlar.",
             const.TWITTER_X_URL
        ),
        spacing=Size.MEDIUM.value, 
        width="100%"
        
    )