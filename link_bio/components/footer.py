import reflex as rx
import datetime

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(    src="favicon.ico", width="100px", height="auto"),
        rx.link(f"2023-{datetime.date.today().year} diegohuh", href="https://diegohuh.000webhostapp.com/"),
        rx.text("BUILD REFLEX")
    )