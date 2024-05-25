import reflex as rx 
import link_bio.styles.styles as styles


def title(text:str) -> rx.Component:
    return rx.chakra.heading(text,
                      size="lg",
                      style = styles.title_style

    )