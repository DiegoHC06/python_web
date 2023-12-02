import reflex as rx
from link_bio.styles.styles import Size as Size
import link_bio.styles.styles as styles

def link_button(title: str,body: str, imagen: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                src=imagen,
                width = styles.Size.BIG.value,
                height = styles.Size.BIG.value,
                margin = Size.MEDIUM.value,
                ),
                rx.vstack(
                rx.text(title, style = styles.button_title_style ),
                rx.text(body, style = styles.button_body_style ),
                align_items = "start",   
                spacing=Size.ZERO.value,
                padding_y=Size.SMALL.value
                )
            )
        ),
        href=url, 
        is_external = True, 
        width = "100%"
    )
    