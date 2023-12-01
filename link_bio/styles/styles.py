import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font as Font
# Contstants
MAX_WIDTH = "600PX"
STYLESHEETS= [ "https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,500;1,300&display=swap"
]
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
    rx.Heading: {
     "color": TextColor.HEADER.value,
      "font_family": Font.TITLE.value 
    },
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "boder_radius": Size.DEFAULT.value,
        "color" : TextColor.BODY.value,
        "background_color" : Color.CONTENT.value,
        "white_space": "normal",
        "text_align": "start",
        "_hover":{
            "background_color" : Color.SECONDARY.value

        }
   
    },
    rx.Link: {
        "text_decoration" :"none",
        "_hover":{} 
    }
}
navbar_title_style = dict(
    font_size=Size.LARGE.value,
    font_family = Font.LOGO.value
    
)

title_style = dict( 
    width = "100%",
    padding_top = Size.DEFAULT.value,
    font_family = Font.TITLE.value,
    color = TextColor.BODY.value
)

button_title_style = dict (
    font_family = Font.TITLE.value,
    font_size = Size.DEFAULT.value,
    color = TextColor.HEADER.value
)

button_body_style = dict(
    font_size = Size.MEDIUM.value,
    font_family = Font.DEFAULT.value
)
