import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.views.header.header import header
from link_bio.links.links import links
from link_bio.components.footer import footer
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size  as Size
# class State(rx.State):
#     pass


def index() -> rx.Component:
    return rx.chakra.box(
        rx.script("document.documentElement.lang='es'"),
        navbar(),
        rx.chakra.center(
            rx.chakra.vstack(
                header(),
                links(),
                max_width = styles.MAX_WIDTH,
                width= "100%",
                margin_y = Size.BIG.value,
                padding=Size.BIG.value 
            )
            
        ),
         footer()
    )
# Add state and page to the app.
app = rx.App( 
    style=styles.BASE_STYLE,
    stylesheets= styles.STYLESHEETS
)
app.add_page(index,
             title = "Diego App",
             description= "Creando AppWeb con nuevo Framework de python"
             
             ) 
