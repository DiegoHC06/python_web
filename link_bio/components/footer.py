import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(    
            src="favicon.ico"),
        rx.link(
               f"2023-{datetime.date.today().year} DielDev by Diego Huh.", 
               href="https://diegohuh.000webhostapp.com/",
               is_external=True,
               font_size=Size.MEDIUM.value),
         rx.text(
            "BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top="0px !important"
        ),
        margin_bottom=Size.BIG.value
    
    )