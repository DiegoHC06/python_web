import reflex as rx
from link_bio.components.link_button import link_button

def links() -> rx.Component:
    return rx.vstack(
        link_button("Twitch","https://www.twitch.tv/diegohc06"),
        link_button("Youtube","https://www.twitch.tv/diegohc06"),
        link_button("LinkEdin","https://www.twitch.tv/diegohc06"),
        link_button("X","https://www.x.com/@dielhc06"),
    )