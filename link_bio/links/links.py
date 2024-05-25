import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size
import link_bio.constants as const

def links() -> rx.Component:
    return rx.chakra.vstack(
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
            "icons/youtube.svg",
            const.YOUTUBE_URL
        ),

        title("Recursos y más"),

        link_button(
            "Página web",
            "Mi sitio WEB",
            "icons/DIEL3.jpeg",
            const.PAGE_URL,
        ),
        link_button(
            "Mi blog",
            "Nuevas lecturas.",
            "icons/blog.png",
            const.BLOG_URL
        ),

        title("Contacto"),

        link_button(
            "Email",
            const.EMAIL,
            "icons/email.svg",
            f"mailto:{const.EMAIL}",
        ),
        spacing=Size.MEDIUM.value, 
        width="100%"
        
    )