import reflex as rx
from link_bio.styles.styles import Size as Size

def link_icon(image: str, url: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag= image,
            width= Size.LARGE.value,
            
        ),
        href=url, 
        is_external = True, 
        
    )
 