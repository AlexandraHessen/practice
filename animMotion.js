<svg width="600" height="170" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <rect x=20 y=40 width=30 height=20 fill=yellow stroke=green stroke-width=2 />

    <path id='PPP1' d='M 200 20 q 80 -50, 300 70' stroke=red fill=none />

    <!-- у rect НЕ задаём атрибуты x и y, иначе прямоугольник сместится относительно кривой -->
    <rect width=30 height=20 fill=yellow stroke=green stroke-width=2>
        <animateMotion dur=3s repeatCount=indefinite>
            <mpath xlink:href="#PPP1"/>
        </animateMotion>
    </rect>

    <path id='PPP2' d='M 200 60 q 80 -50, 300 70' stroke=red fill=none />

    <!-- у rect НЕ задаём атрибуты x и y, иначе прямоугольник сместится относительно кривой -->
    <rect width=30 height=20 fill=yellow stroke=green stroke-width=2>
        <animateMotion dur=3s repeatCount=indefinite rotate=auto>
            <mpath xlink:href="#PPP2"/>
        </animateMotion>
    </rect>

</svg>