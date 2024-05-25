import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
import link_bio.constants as const
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor
def footer() -> rx.Component:
    return rx.chakra.vstack(
        rx.chakra.image(    
            src="favicon.png", width = Size.LARGE.value),
        rx.chakra.link(
               rx.chakra.box(
                 f"2023-{datetime.date.today().year} ",
                 rx.chakra.span("DielDev by Diego Huh.", color=Color.PRIMARY.value),   
               ),
               href=const.PAGE_URL,
               is_external=True,
               font_size=Size.MEDIUM.value),
         rx.chakra.text(
            "BUILDING SOFTWARE WITH ♥ FROM YUCATAN TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
           
        ),
       
        margin_bottom=Size.BIG.value,
        padding_bottom = Size.BIG.value,
        padding_x=Size.BIG.value,   
        spacing=Size.DEFAULT.value,
        color = TextColor.FOOTER.value
    
    )