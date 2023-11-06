import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
import link_bio.constants as const
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor
def footer() -> rx.Component:
    return rx.vstack(
        rx.image(    
            src="favicon.ico"),
        rx.link(
               f"2023-{datetime.date.today().year} DielDev by Diego Huh.", 
               href=const.PAGE_URL,
               is_external=True,
               font_size=Size.MEDIUM.value),
         rx.text(
            "BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
           
        ),
       
        margin_bottom=Size.BIG.value,
        padding_bottom = Size.BIG.value,
        color = TextColor.FOOTER.value
    
    )