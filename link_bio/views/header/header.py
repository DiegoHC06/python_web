import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import TextColor as TextColor
from link_bio.styles.colors import Color as Color
from link_bio.styles.fonts import Font as Font
import link_bio.constants as const
import datetime

def header() -> rx.Component:
    return rx.vstack(
            rx.hstack(
                rx.avatar(name="Diego Huh", size="xl",
                            color=TextColor.BODY.value,
                            src = "avatar.jpg",
                            bg=Color.BACKGROUND.value,
                            padding="2px",
                            border="4px",
                            border_color=Color.PRIMARY.value  
                          ),
                rx.vstack(
                        rx.heading(
                            "DIEGO HUH COB", 
                            size = "lg",                         
                        ), 
                        rx.text(
                            "@diegohc",
                            margin_top = Size.ZERO.value,  
                            color=TextColor.BODY.value,
                            font_family = Font.DEFAULT.value 
                        ), 
                rx.hstack(
                    link_icon(
                        "icons/github.svg",
                        const.GITHUB_URL),
                    link_icon(
                        "icons/instagram.svg",
                        const.INSTAGRAM_URL),   
                    link_icon(
                        "icons/linkedin.svg",
                        const.LINKEDIN_URL),  
                    link_icon(
                        "icons/x-twitter.svg",
                        const.TWITTER_X_URL),
                    link_icon(
                        "icons/web.svg",
                        const.AMAZONMUSIC_URL),
                    font_size = Size.SMALL.value
                ),
                align_items = "start"   
                ),
                spacing=Size.DEFAULT.value
            ),
        rx.flex(
            info_text(f"{experience()}+", "Experencia"),
            rx.spacer(),
            info_text("10+","Seguidores"),
            width= "100%",color=TextColor.BODY.value
        ),
        rx.text("""soy un amante apasionado del desarrollo software me encanta programar y crear soluciones, 
                Aqui podrás encontrar todos mis link ¡Bienvenid@!""",
                font_size = Size.MEDIUM.value,
                color=TextColor.BODY.value
        ),
        spacing=Size.BIG.value,
        align_items= "start"

    )

def experience() -> int:
    return datetime.date.today().year - 2021