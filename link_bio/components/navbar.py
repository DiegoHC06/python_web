import reflex as rx 
from link_bio.styles.styles import Size  as Size
def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "DiegoHC", 
        ),
        position = "sticky",
        bg = "blue",
        padding_x = Size.DEFAULT.value,
        padding_y =Size.SMALL.value,
        z_index = "999",
        top = "0"
    )