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
            "Directos de lunes a vienes.", 
            "icons/twitch.svg",
            const.TWITCH_URL
        ),
        link_button(
            "Youtube",
            "Tutoriales.", 
            "icons/twitch.svg",
            const.YOUTUBE_URL
        ),
        link_button(
            "LinkEdin",
            "Da el siguiente paso en tu carrera profesional y mejora tu futuro laboral hoy mismo.", 
            "icons/linkedin.svg",
            const.LINKEDIN_URL
        ),
        link_button(
            "X",
            "Sígueme para charlar.",
            "icons/twitch.svg",
            const.TWITTER_X_URL
        ),

        title("Recursos y más"),

        link_button(
            "Página web",
            "Mi sitio WEB",
            "icons/twitch.svg",
            const.PAGE_URL
        ),
        link_button(
            "Mi blog",
            "Nuevas lecturas.",
            "icons/github.svg",
            const.BLOG_URL
        ),

        title("Contacto"),

        link_button(
            "Email",
            const.EMAIL,
            "icons/twitch.svg",
            f"mailto:{const.EMAIL}",
        ),
        spacing=Size.MEDIUM.value, 
        width="100%"
        
    )