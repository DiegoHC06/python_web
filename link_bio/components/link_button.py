import reflex as rx
from link_bio.styles.styles import Size as Size
import link_bio.styles.styles as styles
from link_bio.styles.colors import Color

def link_button(title: str,body: str, imagen: str, url: str) -> rx.Component:
    return rx.chakra.link(
        rx.chakra.button(
            rx.chakra.hstack(
                rx.chakra.image(
                src=imagen,
                width = styles.Size.BIG.value,
                height = styles.Size.BIG.value,
                margin = Size.MEDIUM.value,
                ),
                rx.chakra.vstack(
                rx.chakra.text(title, style = styles.button_title_style ),
                rx.chakra.text(body, style = styles.button_body_style ),
                align_items = "start",   
                spacing=Size.ZERO.value,
                padding_y=Size.SMALL.value
                ),
                width="100%"
            )
        ),
        href=url, 
        is_external = True, 
        width = "100%"
    )
    