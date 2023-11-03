import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font as Font
# Contstants
MAX_WIDTH = "600PX"

# Sizes em =16px

class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em" 
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "2.5em"
    BIG = "2em"

#Style

BASE_STYLE = {
    "background_color" : Color.BACKGROUND.value,
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "boder_radius": Size.DEFAULT.value
    },
    rx.Link: {
        "text_decoration" :"none",
        "_hover":{} 
    }
}
navbar_title_style = dict(
    font_size=Size.LARGE.value,
    
)

title_style = dict( 
    width = "100%",
    padding_top = Size.DEFAULT.value,
    font_family = Font.TITLE.value
)

button_title_style = dict(
    font_size = Size.DEFAULT.value
)

button_body_style = dict(
    font_size = Size.MEDIUM.value,
    font_family = Font.DEFAULT.value
)
