export interface TriangleData {
  points: [number, number, number, number, number, number];
  color: { hue: number; saturation: number; lightness: number };
  midpoint: [number, number];
}

const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const triangles: TriangleData[] = [
  {
    points: [0, 0, 67, 0, 0, 67],
    color: { hue: 229, saturation: 42, lightness: 35 },
    midpoint: [22, 22],
  },
  {
    points: [67, 0, 70, 51, 0, 67],
    color: { hue: 229, saturation: 41, lightness: 35 },
    midpoint: [46, 39],
  },
  {
    points: [67, 0, 133, 0, 70, 51],
    color: { hue: 231, saturation: 50, lightness: 39 },
    midpoint: [90, 17],
  },
  {
    points: [133, 0, 114, 58, 70, 51],
    color: { hue: 230, saturation: 42, lightness: 35 },
    midpoint: [106, 36],
  },
  {
    points: [133, 0, 200, 0, 114, 58],
    color: { hue: 229, saturation: 50, lightness: 40 },
    midpoint: [149, 19],
  },
  {
    points: [200, 0, 220, 69, 114, 58],
    color: { hue: 229, saturation: 64, lightness: 46 },
    midpoint: [178, 42],
  },
  {
    points: [200, 0, 267, 0, 220, 69],
    color: { hue: 230, saturation: 53, lightness: 41 },
    midpoint: [229, 23],
  },
  {
    points: [267, 0, 267, 66, 220, 69],
    color: { hue: 229, saturation: 63, lightness: 45 },
    midpoint: [251, 45],
  },
  {
    points: [267, 0, 333, 0, 267, 66],
    color: { hue: 229, saturation: 50, lightness: 39 },
    midpoint: [289, 22],
  },
  {
    points: [333, 0, 342, 57, 267, 66],
    color: { hue: 230, saturation: 49, lightness: 39 },
    midpoint: [314, 41],
  },
  {
    points: [333, 0, 400, 0, 342, 57],
    color: { hue: 229, saturation: 49, lightness: 39 },
    midpoint: [358, 19],
  },
  {
    points: [400, 0, 415, 71, 342, 57],
    color: { hue: 230, saturation: 63, lightness: 45 },
    midpoint: [386, 43],
  },
  {
    points: [400, 0, 467, 0, 415, 71],
    color: { hue: 229, saturation: 51, lightness: 40 },
    midpoint: [427, 24],
  },
  {
    points: [467, 0, 465, 71, 415, 71],
    color: { hue: 229, saturation: 47, lightness: 38 },
    midpoint: [449, 47],
  },
  {
    points: [467, 0, 533, 0, 465, 71],
    color: { hue: 231, saturation: 61, lightness: 45 },
    midpoint: [488, 24],
  },
  {
    points: [533, 0, 530, 68, 465, 71],
    color: { hue: 230, saturation: 50, lightness: 40 },
    midpoint: [509, 46],
  },
  {
    points: [533, 0, 600, 0, 601, 82],
    color: { hue: 230, saturation: 61, lightness: 44 },
    midpoint: [578, 27],
  },
  {
    points: [533, 0, 601, 82, 530, 68],
    color: { hue: 230, saturation: 39, lightness: 34 },
    midpoint: [555, 50],
  },
  {
    points: [600, 0, 667, 0, 601, 82],
    color: { hue: 229, saturation: 54, lightness: 42 },
    midpoint: [623, 27],
  },
  {
    points: [667, 0, 654, 70, 601, 82],
    color: { hue: 229, saturation: 43, lightness: 36 },
    midpoint: [641, 51],
  },
  {
    points: [667, 0, 733, 0, 735, 62],
    color: { hue: 230, saturation: 44, lightness: 37 },
    midpoint: [712, 21],
  },
  {
    points: [667, 0, 735, 62, 654, 70],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [685, 44],
  },
  {
    points: [733, 0, 800, 0, 735, 62],
    color: { hue: 229, saturation: 59, lightness: 44 },
    midpoint: [756, 21],
  },
  {
    points: [800, 0, 800, 67, 735, 62],
    color: { hue: 230, saturation: 61, lightness: 44 },
    midpoint: [778, 43],
  },
  {
    points: [0, 67, 70, 51, 0, 133],
    color: { hue: 231, saturation: 63, lightness: 45 },
    midpoint: [23, 84],
  },
  {
    points: [70, 51, 74, 143, 0, 133],
    color: { hue: 229, saturation: 42, lightness: 35 },
    midpoint: [48, 109],
  },
  {
    points: [70, 51, 114, 58, 118, 123],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [101, 77],
  },
  {
    points: [70, 51, 118, 123, 74, 143],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [87, 106],
  },
  {
    points: [114, 58, 220, 69, 194, 112],
    color: { hue: 229, saturation: 50, lightness: 40 },
    midpoint: [176, 80],
  },
  {
    points: [114, 58, 194, 112, 118, 123],
    color: { hue: 230, saturation: 50, lightness: 40 },
    midpoint: [142, 98],
  },
  {
    points: [220, 69, 267, 66, 194, 112],
    color: { hue: 229, saturation: 43, lightness: 36 },
    midpoint: [227, 82],
  },
  {
    points: [267, 66, 262, 139, 194, 112],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [241, 106],
  },
  {
    points: [267, 66, 342, 57, 262, 139],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [290, 87],
  },
  {
    points: [342, 57, 338, 138, 262, 139],
    color: { hue: 229, saturation: 39, lightness: 34 },
    midpoint: [314, 111],
  },
  {
    points: [342, 57, 415, 71, 380, 141],
    color: { hue: 229, saturation: 45, lightness: 37 },
    midpoint: [379, 90],
  },
  {
    points: [342, 57, 380, 141, 338, 138],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [353, 112],
  },
  {
    points: [415, 71, 465, 71, 380, 141],
    color: { hue: 230, saturation: 63, lightness: 45 },
    midpoint: [420, 94],
  },
  {
    points: [465, 71, 457, 156, 380, 141],
    color: { hue: 231, saturation: 58, lightness: 43 },
    midpoint: [434, 123],
  },
  {
    points: [465, 71, 530, 68, 457, 156],
    color: { hue: 231, saturation: 64, lightness: 46 },
    midpoint: [484, 98],
  },
  {
    points: [530, 68, 534, 136, 457, 156],
    color: { hue: 230, saturation: 51, lightness: 40 },
    midpoint: [507, 120],
  },
  {
    points: [530, 68, 601, 82, 534, 136],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [555, 95],
  },
  {
    points: [601, 82, 601, 155, 534, 136],
    color: { hue: 229, saturation: 54, lightness: 42 },
    midpoint: [579, 124],
  },
  {
    points: [601, 82, 654, 70, 666, 134],
    color: { hue: 229, saturation: 47, lightness: 38 },
    midpoint: [640, 95],
  },
  {
    points: [601, 82, 666, 134, 601, 155],
    color: { hue: 230, saturation: 43, lightness: 36 },
    midpoint: [623, 124],
  },
  {
    points: [654, 70, 735, 62, 729, 128],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [706, 87],
  },
  {
    points: [654, 70, 729, 128, 666, 134],
    color: { hue: 230, saturation: 62, lightness: 45 },
    midpoint: [683, 111],
  },
  {
    points: [735, 62, 800, 67, 729, 128],
    color: { hue: 230, saturation: 53, lightness: 41 },
    midpoint: [755, 86],
  },
  {
    points: [800, 67, 800, 133, 729, 128],
    color: { hue: 229, saturation: 62, lightness: 45 },
    midpoint: [776, 109],
  },
  {
    points: [0, 133, 74, 143, 60, 201],
    color: { hue: 230, saturation: 56, lightness: 43 },
    midpoint: [45, 159],
  },
  {
    points: [0, 133, 60, 201, 0, 200],
    color: { hue: 231, saturation: 42, lightness: 35 },
    midpoint: [20, 178],
  },
  {
    points: [74, 143, 118, 123, 60, 201],
    color: { hue: 229, saturation: 57, lightness: 43 },
    midpoint: [84, 156],
  },
  {
    points: [118, 123, 145, 204, 60, 201],
    color: { hue: 230, saturation: 47, lightness: 38 },
    midpoint: [108, 176],
  },
  {
    points: [118, 123, 194, 112, 145, 204],
    color: { hue: 230, saturation: 64, lightness: 46 },
    midpoint: [152, 146],
  },
  {
    points: [194, 112, 203, 198, 145, 204],
    color: { hue: 230, saturation: 57, lightness: 43 },
    midpoint: [181, 171],
  },
  {
    points: [194, 112, 262, 139, 203, 198],
    color: { hue: 229, saturation: 58, lightness: 44 },
    midpoint: [220, 150],
  },
  {
    points: [262, 139, 267, 184, 203, 198],
    color: { hue: 231, saturation: 41, lightness: 35 },
    midpoint: [244, 174],
  },
  {
    points: [262, 139, 338, 138, 333, 200],
    color: { hue: 231, saturation: 39, lightness: 34 },
    midpoint: [311, 159],
  },
  {
    points: [262, 139, 333, 200, 267, 184],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [287, 174],
  },
  {
    points: [338, 138, 380, 141, 378, 208],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [365, 162],
  },
  {
    points: [338, 138, 378, 208, 333, 200],
    color: { hue: 230, saturation: 51, lightness: 40 },
    midpoint: [350, 182],
  },
  {
    points: [380, 141, 457, 156, 378, 208],
    color: { hue: 230, saturation: 54, lightness: 42 },
    midpoint: [405, 168],
  },
  {
    points: [457, 156, 465, 209, 378, 208],
    color: { hue: 230, saturation: 53, lightness: 41 },
    midpoint: [433, 191],
  },
  {
    points: [457, 156, 534, 136, 465, 209],
    color: { hue: 230, saturation: 58, lightness: 44 },
    midpoint: [485, 167],
  },
  {
    points: [534, 136, 540, 190, 465, 209],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [513, 178],
  },
  {
    points: [534, 136, 601, 155, 540, 190],
    color: { hue: 230, saturation: 40, lightness: 35 },
    midpoint: [558, 160],
  },
  {
    points: [601, 155, 605, 193, 540, 190],
    color: { hue: 230, saturation: 51, lightness: 40 },
    midpoint: [582, 179],
  },
  {
    points: [601, 155, 666, 134, 605, 193],
    color: { hue: 230, saturation: 42, lightness: 35 },
    midpoint: [624, 161],
  },
  {
    points: [666, 134, 671, 193, 605, 193],
    color: { hue: 229, saturation: 54, lightness: 42 },
    midpoint: [647, 173],
  },
  {
    points: [666, 134, 729, 128, 671, 193],
    color: { hue: 229, saturation: 50, lightness: 39 },
    midpoint: [689, 152],
  },
  {
    points: [729, 128, 733, 200, 671, 193],
    color: { hue: 230, saturation: 57, lightness: 43 },
    midpoint: [711, 174],
  },
  {
    points: [729, 128, 800, 133, 800, 200],
    color: { hue: 229, saturation: 52, lightness: 41 },
    midpoint: [776, 154],
  },
  {
    points: [729, 128, 800, 200, 733, 200],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [754, 176],
  },
  {
    points: [0, 200, 60, 201, 77, 276],
    color: { hue: 229, saturation: 61, lightness: 44 },
    midpoint: [46, 226],
  },
  {
    points: [0, 200, 77, 276, 0, 267],
    color: { hue: 231, saturation: 47, lightness: 38 },
    midpoint: [26, 248],
  },
  {
    points: [60, 201, 145, 204, 120, 247],
    color: { hue: 229, saturation: 50, lightness: 39 },
    midpoint: [108, 217],
  },
  {
    points: [60, 201, 120, 247, 77, 276],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [86, 241],
  },
  {
    points: [145, 204, 203, 198, 197, 266],
    color: { hue: 230, saturation: 47, lightness: 38 },
    midpoint: [182, 223],
  },
  {
    points: [145, 204, 197, 266, 120, 247],
    color: { hue: 229, saturation: 50, lightness: 40 },
    midpoint: [154, 239],
  },
  {
    points: [203, 198, 267, 184, 271, 255],
    color: { hue: 230, saturation: 61, lightness: 45 },
    midpoint: [247, 212],
  },
  {
    points: [203, 198, 271, 255, 197, 266],
    color: { hue: 230, saturation: 43, lightness: 36 },
    midpoint: [224, 240],
  },
  {
    points: [267, 184, 333, 200, 271, 255],
    color: { hue: 229, saturation: 57, lightness: 43 },
    midpoint: [290, 213],
  },
  {
    points: [333, 200, 322, 251, 271, 255],
    color: { hue: 229, saturation: 49, lightness: 39 },
    midpoint: [309, 235],
  },
  {
    points: [333, 200, 378, 208, 424, 258],
    color: { hue: 229, saturation: 45, lightness: 37 },
    midpoint: [378, 222],
  },
  {
    points: [333, 200, 424, 258, 322, 251],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [360, 236],
  },
  {
    points: [378, 208, 465, 209, 424, 258],
    color: { hue: 230, saturation: 48, lightness: 39 },
    midpoint: [422, 225],
  },
  {
    points: [465, 209, 459, 274, 424, 258],
    color: { hue: 231, saturation: 57, lightness: 43 },
    midpoint: [449, 247],
  },
  {
    points: [465, 209, 540, 190, 523, 286],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [509, 228],
  },
  {
    points: [465, 209, 523, 286, 459, 274],
    color: { hue: 231, saturation: 61, lightness: 45 },
    midpoint: [482, 256],
  },
  {
    points: [540, 190, 605, 193, 607, 256],
    color: { hue: 231, saturation: 48, lightness: 39 },
    midpoint: [584, 213],
  },
  {
    points: [540, 190, 607, 256, 523, 286],
    color: { hue: 229, saturation: 48, lightness: 39 },
    midpoint: [557, 244],
  },
  {
    points: [605, 193, 671, 193, 680, 254],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [652, 213],
  },
  {
    points: [605, 193, 680, 254, 607, 256],
    color: { hue: 230, saturation: 51, lightness: 40 },
    midpoint: [631, 234],
  },
  {
    points: [671, 193, 733, 200, 680, 254],
    color: { hue: 229, saturation: 54, lightness: 42 },
    midpoint: [695, 216],
  },
  {
    points: [733, 200, 729, 269, 680, 254],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [714, 241],
  },
  {
    points: [733, 200, 800, 200, 729, 269],
    color: { hue: 231, saturation: 52, lightness: 41 },
    midpoint: [754, 223],
  },
  {
    points: [800, 200, 800, 267, 729, 269],
    color: { hue: 229, saturation: 42, lightness: 35 },
    midpoint: [776, 245],
  },
  {
    points: [0, 267, 77, 276, 0, 333],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [26, 292],
  },
  {
    points: [77, 276, 77, 324, 0, 333],
    color: { hue: 230, saturation: 43, lightness: 36 },
    midpoint: [51, 311],
  },
  {
    points: [77, 276, 120, 247, 77, 324],
    color: { hue: 229, saturation: 44, lightness: 37 },
    midpoint: [91, 282],
  },
  {
    points: [120, 247, 154, 328, 77, 324],
    color: { hue: 230, saturation: 54, lightness: 42 },
    midpoint: [117, 300],
  },
  {
    points: [120, 247, 197, 266, 200, 332],
    color: { hue: 229, saturation: 60, lightness: 44 },
    midpoint: [172, 282],
  },
  {
    points: [120, 247, 200, 332, 154, 328],
    color: { hue: 230, saturation: 48, lightness: 39 },
    midpoint: [158, 302],
  },
  {
    points: [197, 266, 271, 255, 200, 332],
    color: { hue: 229, saturation: 47, lightness: 38 },
    midpoint: [223, 284],
  },
  {
    points: [271, 255, 259, 356, 200, 332],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [243, 314],
  },
  {
    points: [271, 255, 322, 251, 323, 348],
    color: { hue: 231, saturation: 59, lightness: 44 },
    midpoint: [305, 285],
  },
  {
    points: [271, 255, 323, 348, 259, 356],
    color: { hue: 230, saturation: 52, lightness: 41 },
    midpoint: [284, 320],
  },
  {
    points: [322, 251, 424, 258, 323, 348],
    color: { hue: 230, saturation: 56, lightness: 42 },
    midpoint: [356, 286],
  },
  {
    points: [424, 258, 421, 341, 323, 348],
    color: { hue: 230, saturation: 61, lightness: 45 },
    midpoint: [389, 316],
  },
  {
    points: [424, 258, 459, 274, 421, 341],
    color: { hue: 230, saturation: 49, lightness: 39 },
    midpoint: [435, 291],
  },
  {
    points: [459, 274, 491, 328, 421, 341],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [457, 314],
  },
  {
    points: [459, 274, 523, 286, 491, 328],
    color: { hue: 231, saturation: 50, lightness: 39 },
    midpoint: [491, 296],
  },
  {
    points: [523, 286, 538, 323, 491, 328],
    color: { hue: 230, saturation: 51, lightness: 40 },
    midpoint: [517, 312],
  },
  {
    points: [523, 286, 607, 256, 609, 336],
    color: { hue: 229, saturation: 56, lightness: 43 },
    midpoint: [580, 293],
  },
  {
    points: [523, 286, 609, 336, 538, 323],
    color: { hue: 231, saturation: 47, lightness: 38 },
    midpoint: [557, 315],
  },
  {
    points: [607, 256, 680, 254, 609, 336],
    color: { hue: 230, saturation: 48, lightness: 39 },
    midpoint: [632, 282],
  },
  {
    points: [680, 254, 679, 328, 609, 336],
    color: { hue: 230, saturation: 39, lightness: 34 },
    midpoint: [656, 306],
  },
  {
    points: [680, 254, 729, 269, 679, 328],
    color: { hue: 229, saturation: 44, lightness: 37 },
    midpoint: [696, 284],
  },
  {
    points: [729, 269, 745, 336, 679, 328],
    color: { hue: 231, saturation: 47, lightness: 38 },
    midpoint: [718, 311],
  },
  {
    points: [729, 269, 800, 267, 745, 336],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [758, 291],
  },
  {
    points: [800, 267, 800, 333, 745, 336],
    color: { hue: 229, saturation: 43, lightness: 36 },
    midpoint: [782, 312],
  },
  {
    points: [0, 333, 77, 324, 65, 412],
    color: { hue: 231, saturation: 41, lightness: 35 },
    midpoint: [47, 356],
  },
  {
    points: [0, 333, 65, 412, 0, 400],
    color: { hue: 230, saturation: 47, lightness: 38 },
    midpoint: [22, 382],
  },
  {
    points: [77, 324, 154, 328, 134, 400],
    color: { hue: 230, saturation: 58, lightness: 44 },
    midpoint: [122, 351],
  },
  {
    points: [77, 324, 134, 400, 65, 412],
    color: { hue: 230, saturation: 49, lightness: 39 },
    midpoint: [92, 379],
  },
  {
    points: [154, 328, 200, 332, 195, 377],
    color: { hue: 229, saturation: 56, lightness: 43 },
    midpoint: [183, 346],
  },
  {
    points: [154, 328, 195, 377, 134, 400],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [161, 368],
  },
  {
    points: [200, 332, 259, 356, 195, 377],
    color: { hue: 229, saturation: 41, lightness: 35 },
    midpoint: [218, 355],
  },
  {
    points: [259, 356, 254, 413, 195, 377],
    color: { hue: 231, saturation: 56, lightness: 42 },
    midpoint: [236, 382],
  },
  {
    points: [259, 356, 323, 348, 254, 413],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [279, 372],
  },
  {
    points: [323, 348, 329, 394, 254, 413],
    color: { hue: 230, saturation: 52, lightness: 41 },
    midpoint: [302, 385],
  },
  {
    points: [323, 348, 421, 341, 381, 397],
    color: { hue: 229, saturation: 42, lightness: 36 },
    midpoint: [375, 362],
  },
  {
    points: [323, 348, 381, 397, 329, 394],
    color: { hue: 229, saturation: 47, lightness: 38 },
    midpoint: [344, 380],
  },
  {
    points: [421, 341, 491, 328, 468, 397],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [460, 355],
  },
  {
    points: [421, 341, 468, 397, 381, 397],
    color: { hue: 230, saturation: 56, lightness: 42 },
    midpoint: [423, 378],
  },
  {
    points: [491, 328, 538, 323, 522, 403],
    color: { hue: 230, saturation: 61, lightness: 44 },
    midpoint: [517, 351],
  },
  {
    points: [491, 328, 522, 403, 468, 397],
    color: { hue: 230, saturation: 61, lightness: 45 },
    midpoint: [494, 376],
  },
  {
    points: [538, 323, 609, 336, 589, 395],
    color: { hue: 230, saturation: 52, lightness: 41 },
    midpoint: [579, 351],
  },
  {
    points: [538, 323, 589, 395, 522, 403],
    color: { hue: 229, saturation: 43, lightness: 36 },
    midpoint: [550, 374],
  },
  {
    points: [609, 336, 679, 328, 663, 381],
    color: { hue: 229, saturation: 42, lightness: 36 },
    midpoint: [650, 348],
  },
  {
    points: [609, 336, 663, 381, 589, 395],
    color: { hue: 231, saturation: 46, lightness: 38 },
    midpoint: [620, 371],
  },
  {
    points: [679, 328, 745, 336, 734, 400],
    color: { hue: 229, saturation: 57, lightness: 43 },
    midpoint: [719, 355],
  },
  {
    points: [679, 328, 734, 400, 663, 381],
    color: { hue: 231, saturation: 41, lightness: 35 },
    midpoint: [692, 370],
  },
  {
    points: [745, 336, 800, 333, 800, 400],
    color: { hue: 231, saturation: 53, lightness: 41 },
    midpoint: [782, 356],
  },
  {
    points: [745, 336, 800, 400, 734, 400],
    color: { hue: 229, saturation: 56, lightness: 42 },
    midpoint: [760, 379],
  },
  {
    points: [0, 400, 65, 412, 0, 467],
    color: { hue: 231, saturation: 54, lightness: 42 },
    midpoint: [22, 426],
  },
  {
    points: [65, 412, 82, 453, 0, 467],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [49, 444],
  },
  {
    points: [65, 412, 134, 400, 82, 453],
    color: { hue: 230, saturation: 48, lightness: 39 },
    midpoint: [94, 422],
  },
  {
    points: [134, 400, 147, 457, 82, 453],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [121, 437],
  },
  {
    points: [134, 400, 195, 377, 147, 457],
    color: { hue: 229, saturation: 52, lightness: 41 },
    midpoint: [159, 411],
  },
  {
    points: [195, 377, 198, 465, 147, 457],
    color: { hue: 230, saturation: 58, lightness: 44 },
    midpoint: [180, 433],
  },
  {
    points: [195, 377, 254, 413, 273, 442],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [241, 411],
  },
  {
    points: [195, 377, 273, 442, 198, 465],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [222, 428],
  },
  {
    points: [254, 413, 329, 394, 273, 442],
    color: { hue: 229, saturation: 40, lightness: 34 },
    midpoint: [285, 416],
  },
  {
    points: [329, 394, 326, 458, 273, 442],
    color: { hue: 229, saturation: 55, lightness: 42 },
    midpoint: [309, 431],
  },
  {
    points: [329, 394, 381, 397, 326, 458],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [345, 416],
  },
  {
    points: [381, 397, 395, 451, 326, 458],
    color: { hue: 229, saturation: 50, lightness: 40 },
    midpoint: [367, 435],
  },
  {
    points: [381, 397, 468, 397, 395, 451],
    color: { hue: 229, saturation: 47, lightness: 38 },
    midpoint: [415, 415],
  },
  {
    points: [468, 397, 469, 471, 395, 451],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [444, 440],
  },
  {
    points: [468, 397, 522, 403, 469, 471],
    color: { hue: 231, saturation: 40, lightness: 35 },
    midpoint: [486, 424],
  },
  {
    points: [522, 403, 531, 467, 469, 471],
    color: { hue: 231, saturation: 55, lightness: 42 },
    midpoint: [507, 447],
  },
  {
    points: [522, 403, 589, 395, 531, 467],
    color: { hue: 230, saturation: 46, lightness: 38 },
    midpoint: [547, 422],
  },
  {
    points: [589, 395, 599, 441, 531, 467],
    color: { hue: 230, saturation: 60, lightness: 44 },
    midpoint: [573, 434],
  },
  {
    points: [589, 395, 663, 381, 671, 473],
    color: { hue: 230, saturation: 54, lightness: 42 },
    midpoint: [641, 416],
  },
  {
    points: [589, 395, 671, 473, 599, 441],
    color: { hue: 230, saturation: 49, lightness: 39 },
    midpoint: [620, 436],
  },
  {
    points: [663, 381, 734, 400, 735, 462],
    color: { hue: 229, saturation: 56, lightness: 42 },
    midpoint: [711, 414],
  },
  {
    points: [663, 381, 735, 462, 671, 473],
    color: { hue: 230, saturation: 50, lightness: 40 },
    midpoint: [690, 439],
  },
  {
    points: [734, 400, 800, 400, 735, 462],
    color: { hue: 231, saturation: 44, lightness: 37 },
    midpoint: [756, 421],
  },
  {
    points: [800, 400, 800, 467, 735, 462],
    color: { hue: 229, saturation: 46, lightness: 38 },
    midpoint: [778, 443],
  },
  {
    points: [0, 467, 82, 453, 53, 553],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [45, 491],
  },
  {
    points: [0, 467, 53, 553, 0, 533],
    color: { hue: 229, saturation: 39, lightness: 34 },
    midpoint: [18, 518],
  },
  {
    points: [82, 453, 147, 457, 53, 553],
    color: { hue: 229, saturation: 51, lightness: 40 },
    midpoint: [94, 488],
  },
  {
    points: [147, 457, 129, 541, 53, 553],
    color: { hue: 230, saturation: 42, lightness: 35 },
    midpoint: [110, 517],
  },
  {
    points: [147, 457, 198, 465, 129, 541],
    color: { hue: 229, saturation: 56, lightness: 43 },
    midpoint: [158, 488],
  },
  {
    points: [198, 465, 210, 529, 129, 541],
    color: { hue: 231, saturation: 44, lightness: 37 },
    midpoint: [179, 512],
  },
  {
    points: [198, 465, 273, 442, 266, 532],
    color: { hue: 229, saturation: 51, lightness: 40 },
    midpoint: [246, 480],
  },
  {
    points: [198, 465, 266, 532, 210, 529],
    color: { hue: 229, saturation: 63, lightness: 45 },
    midpoint: [225, 509],
  },
  {
    points: [273, 442, 326, 458, 266, 532],
    color: { hue: 231, saturation: 57, lightness: 43 },
    midpoint: [288, 477],
  },
  {
    points: [326, 458, 345, 537, 266, 532],
    color: { hue: 230, saturation: 42, lightness: 35 },
    midpoint: [312, 509],
  },
  {
    points: [326, 458, 395, 451, 408, 512],
    color: { hue: 230, saturation: 40, lightness: 35 },
    midpoint: [376, 474],
  },
  {
    points: [326, 458, 408, 512, 345, 537],
    color: { hue: 231, saturation: 40, lightness: 35 },
    midpoint: [360, 502],
  },
  {
    points: [395, 451, 469, 471, 408, 512],
    color: { hue: 229, saturation: 46, lightness: 38 },
    midpoint: [424, 478],
  },
  {
    points: [469, 471, 451, 553, 408, 512],
    color: { hue: 230, saturation: 52, lightness: 41 },
    midpoint: [443, 512],
  },
  {
    points: [469, 471, 531, 467, 451, 553],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [484, 497],
  },
  {
    points: [531, 467, 534, 558, 451, 553],
    color: { hue: 231, saturation: 43, lightness: 36 },
    midpoint: [505, 526],
  },
  {
    points: [531, 467, 599, 441, 622, 525],
    color: { hue: 230, saturation: 50, lightness: 40 },
    midpoint: [584, 478],
  },
  {
    points: [531, 467, 622, 525, 534, 558],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [562, 517],
  },
  {
    points: [599, 441, 671, 473, 622, 525],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [631, 480],
  },
  {
    points: [671, 473, 678, 538, 622, 525],
    color: { hue: 231, saturation: 48, lightness: 39 },
    midpoint: [657, 512],
  },
  {
    points: [671, 473, 735, 462, 734, 527],
    color: { hue: 230, saturation: 57, lightness: 43 },
    midpoint: [713, 487],
  },
  {
    points: [671, 473, 734, 527, 678, 538],
    color: { hue: 229, saturation: 63, lightness: 45 },
    midpoint: [694, 513],
  },
  {
    points: [735, 462, 800, 467, 734, 527],
    color: { hue: 229, saturation: 45, lightness: 37 },
    midpoint: [756, 485],
  },
  {
    points: [800, 467, 800, 533, 734, 527],
    color: { hue: 229, saturation: 50, lightness: 40 },
    midpoint: [778, 509],
  },
  {
    points: [0, 533, 53, 553, 72, 597],
    color: { hue: 230, saturation: 39, lightness: 34 },
    midpoint: [42, 561],
  },
  {
    points: [0, 533, 72, 597, 0, 600],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [24, 577],
  },
  {
    points: [53, 553, 129, 541, 72, 597],
    color: { hue: 229, saturation: 55, lightness: 42 },
    midpoint: [85, 564],
  },
  {
    points: [129, 541, 150, 595, 72, 597],
    color: { hue: 229, saturation: 40, lightness: 35 },
    midpoint: [117, 578],
  },
  {
    points: [129, 541, 210, 529, 181, 595],
    color: { hue: 231, saturation: 64, lightness: 46 },
    midpoint: [173, 555],
  },
  {
    points: [129, 541, 181, 595, 150, 595],
    color: { hue: 229, saturation: 45, lightness: 37 },
    midpoint: [153, 577],
  },
  {
    points: [210, 529, 266, 532, 267, 600],
    color: { hue: 229, saturation: 55, lightness: 42 },
    midpoint: [248, 554],
  },
  {
    points: [210, 529, 267, 600, 181, 595],
    color: { hue: 230, saturation: 63, lightness: 45 },
    midpoint: [219, 575],
  },
  {
    points: [266, 532, 345, 537, 352, 603],
    color: { hue: 231, saturation: 54, lightness: 42 },
    midpoint: [321, 557],
  },
  {
    points: [266, 532, 352, 603, 267, 600],
    color: { hue: 230, saturation: 54, lightness: 42 },
    midpoint: [295, 578],
  },
  {
    points: [345, 537, 408, 512, 395, 593],
    color: { hue: 229, saturation: 55, lightness: 42 },
    midpoint: [383, 547],
  },
  {
    points: [345, 537, 395, 593, 352, 603],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [364, 578],
  },
  {
    points: [408, 512, 451, 553, 467, 604],
    color: { hue: 231, saturation: 44, lightness: 36 },
    midpoint: [442, 556],
  },
  {
    points: [408, 512, 467, 604, 395, 593],
    color: { hue: 229, saturation: 59, lightness: 44 },
    midpoint: [423, 570],
  },
  {
    points: [451, 553, 534, 558, 467, 604],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [484, 572],
  },
  {
    points: [534, 558, 513, 597, 467, 604],
    color: { hue: 229, saturation: 44, lightness: 36 },
    midpoint: [505, 586],
  },
  {
    points: [534, 558, 622, 525, 513, 597],
    color: { hue: 229, saturation: 44, lightness: 36 },
    midpoint: [556, 560],
  },
  {
    points: [622, 525, 602, 580, 513, 597],
    color: { hue: 230, saturation: 51, lightness: 40 },
    midpoint: [579, 567],
  },
  {
    points: [622, 525, 678, 538, 602, 580],
    color: { hue: 230, saturation: 40, lightness: 35 },
    midpoint: [634, 548],
  },
  {
    points: [678, 538, 665, 599, 602, 580],
    color: { hue: 231, saturation: 60, lightness: 44 },
    midpoint: [648, 572],
  },
  {
    points: [678, 538, 734, 527, 719, 587],
    color: { hue: 230, saturation: 53, lightness: 41 },
    midpoint: [710, 551],
  },
  {
    points: [678, 538, 719, 587, 665, 599],
    color: { hue: 231, saturation: 60, lightness: 44 },
    midpoint: [687, 575],
  },
  {
    points: [734, 527, 800, 533, 800, 600],
    color: { hue: 229, saturation: 43, lightness: 36 },
    midpoint: [778, 553],
  },
  {
    points: [734, 527, 800, 600, 719, 587],
    color: { hue: 229, saturation: 55, lightness: 42 },
    midpoint: [751, 571],
  },
  {
    points: [0, 600, 72, 597, 68, 661],
    color: { hue: 231, saturation: 42, lightness: 35 },
    midpoint: [47, 619],
  },
  {
    points: [0, 600, 68, 661, 0, 667],
    color: { hue: 231, saturation: 52, lightness: 41 },
    midpoint: [23, 643],
  },
  {
    points: [72, 597, 150, 595, 131, 664],
    color: { hue: 230, saturation: 40, lightness: 35 },
    midpoint: [118, 619],
  },
  {
    points: [72, 597, 131, 664, 68, 661],
    color: { hue: 230, saturation: 39, lightness: 34 },
    midpoint: [90, 641],
  },
  {
    points: [150, 595, 181, 595, 175, 660],
    color: { hue: 230, saturation: 52, lightness: 41 },
    midpoint: [169, 617],
  },
  {
    points: [150, 595, 175, 660, 131, 664],
    color: { hue: 230, saturation: 52, lightness: 41 },
    midpoint: [152, 640],
  },
  {
    points: [181, 595, 267, 600, 261, 667],
    color: { hue: 231, saturation: 47, lightness: 38 },
    midpoint: [236, 621],
  },
  {
    points: [181, 595, 261, 667, 175, 660],
    color: { hue: 231, saturation: 51, lightness: 40 },
    midpoint: [206, 641],
  },
  {
    points: [267, 600, 352, 603, 261, 667],
    color: { hue: 229, saturation: 51, lightness: 40 },
    midpoint: [293, 623],
  },
  {
    points: [352, 603, 311, 669, 261, 667],
    color: { hue: 231, saturation: 50, lightness: 39 },
    midpoint: [308, 646],
  },
  {
    points: [352, 603, 395, 593, 388, 659],
    color: { hue: 229, saturation: 41, lightness: 35 },
    midpoint: [378, 618],
  },
  {
    points: [352, 603, 388, 659, 311, 669],
    color: { hue: 231, saturation: 63, lightness: 45 },
    midpoint: [350, 644],
  },
  {
    points: [395, 593, 467, 604, 462, 671],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [441, 623],
  },
  {
    points: [395, 593, 462, 671, 388, 659],
    color: { hue: 231, saturation: 58, lightness: 43 },
    midpoint: [415, 641],
  },
  {
    points: [467, 604, 513, 597, 525, 664],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [502, 622],
  },
  {
    points: [467, 604, 525, 664, 462, 671],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [485, 646],
  },
  {
    points: [513, 597, 602, 580, 611, 678],
    color: { hue: 230, saturation: 63, lightness: 45 },
    midpoint: [575, 618],
  },
  {
    points: [513, 597, 611, 678, 525, 664],
    color: { hue: 231, saturation: 53, lightness: 41 },
    midpoint: [550, 646],
  },
  {
    points: [602, 580, 665, 599, 611, 678],
    color: { hue: 229, saturation: 55, lightness: 42 },
    midpoint: [626, 619],
  },
  {
    points: [665, 599, 675, 655, 611, 678],
    color: { hue: 229, saturation: 61, lightness: 45 },
    midpoint: [650, 644],
  },
  {
    points: [665, 599, 719, 587, 728, 648],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [704, 611],
  },
  {
    points: [665, 599, 728, 648, 675, 655],
    color: { hue: 229, saturation: 43, lightness: 36 },
    midpoint: [689, 634],
  },
  {
    points: [719, 587, 800, 600, 800, 667],
    color: { hue: 230, saturation: 42, lightness: 36 },
    midpoint: [773, 618],
  },
  {
    points: [719, 587, 800, 667, 728, 648],
    color: { hue: 231, saturation: 63, lightness: 45 },
    midpoint: [749, 634],
  },
  {
    points: [0, 667, 68, 661, 0, 733],
    color: { hue: 230, saturation: 59, lightness: 44 },
    midpoint: [23, 687],
  },
  {
    points: [68, 661, 49, 719, 0, 733],
    color: { hue: 230, saturation: 58, lightness: 43 },
    midpoint: [39, 704],
  },
  {
    points: [68, 661, 131, 664, 49, 719],
    color: { hue: 231, saturation: 44, lightness: 36 },
    midpoint: [83, 681],
  },
  {
    points: [131, 664, 128, 724, 49, 719],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [103, 702],
  },
  {
    points: [131, 664, 175, 660, 195, 747],
    color: { hue: 229, saturation: 57, lightness: 43 },
    midpoint: [167, 690],
  },
  {
    points: [131, 664, 195, 747, 128, 724],
    color: { hue: 230, saturation: 43, lightness: 36 },
    midpoint: [151, 712],
  },
  {
    points: [175, 660, 261, 667, 288, 720],
    color: { hue: 229, saturation: 59, lightness: 44 },
    midpoint: [241, 682],
  },
  {
    points: [175, 660, 288, 720, 195, 747],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [219, 709],
  },
  {
    points: [261, 667, 311, 669, 323, 749],
    color: { hue: 229, saturation: 59, lightness: 44 },
    midpoint: [298, 695],
  },
  {
    points: [261, 667, 323, 749, 288, 720],
    color: { hue: 230, saturation: 46, lightness: 38 },
    midpoint: [291, 712],
  },
  {
    points: [311, 669, 388, 659, 402, 734],
    color: { hue: 230, saturation: 61, lightness: 45 },
    midpoint: [367, 687],
  },
  {
    points: [311, 669, 402, 734, 323, 749],
    color: { hue: 229, saturation: 57, lightness: 43 },
    midpoint: [345, 717],
  },
  {
    points: [388, 659, 462, 671, 459, 729],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [436, 686],
  },
  {
    points: [388, 659, 459, 729, 402, 734],
    color: { hue: 230, saturation: 50, lightness: 40 },
    midpoint: [416, 707],
  },
  {
    points: [462, 671, 525, 664, 459, 729],
    color: { hue: 230, saturation: 48, lightness: 39 },
    midpoint: [482, 688],
  },
  {
    points: [525, 664, 532, 733, 459, 729],
    color: { hue: 230, saturation: 47, lightness: 38 },
    midpoint: [505, 709],
  },
  {
    points: [525, 664, 611, 678, 613, 750],
    color: { hue: 230, saturation: 64, lightness: 46 },
    midpoint: [583, 697],
  },
  {
    points: [525, 664, 613, 750, 532, 733],
    color: { hue: 231, saturation: 52, lightness: 41 },
    midpoint: [557, 716],
  },
  {
    points: [611, 678, 675, 655, 613, 750],
    color: { hue: 231, saturation: 44, lightness: 37 },
    midpoint: [633, 694],
  },
  {
    points: [675, 655, 666, 733, 613, 750],
    color: { hue: 230, saturation: 48, lightness: 39 },
    midpoint: [651, 713],
  },
  {
    points: [675, 655, 728, 648, 743, 736],
    color: { hue: 229, saturation: 58, lightness: 44 },
    midpoint: [715, 680],
  },
  {
    points: [675, 655, 743, 736, 666, 733],
    color: { hue: 231, saturation: 42, lightness: 36 },
    midpoint: [695, 708],
  },
  {
    points: [728, 648, 800, 667, 743, 736],
    color: { hue: 231, saturation: 46, lightness: 38 },
    midpoint: [757, 684],
  },
  {
    points: [800, 667, 800, 733, 743, 736],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [781, 712],
  },
  {
    points: [0, 733, 49, 719, 67, 800],
    color: { hue: 230, saturation: 63, lightness: 45 },
    midpoint: [39, 751],
  },
  {
    points: [0, 733, 67, 800, 0, 800],
    color: { hue: 229, saturation: 53, lightness: 41 },
    midpoint: [22, 778],
  },
  {
    points: [49, 719, 128, 724, 133, 800],
    color: { hue: 231, saturation: 47, lightness: 38 },
    midpoint: [103, 748],
  },
  {
    points: [49, 719, 133, 800, 67, 800],
    color: { hue: 230, saturation: 42, lightness: 36 },
    midpoint: [83, 773],
  },
  {
    points: [128, 724, 195, 747, 200, 800],
    color: { hue: 231, saturation: 62, lightness: 45 },
    midpoint: [174, 757],
  },
  {
    points: [128, 724, 200, 800, 133, 800],
    color: { hue: 230, saturation: 45, lightness: 37 },
    midpoint: [154, 775],
  },
  {
    points: [195, 747, 288, 720, 200, 800],
    color: { hue: 229, saturation: 64, lightness: 46 },
    midpoint: [228, 756],
  },
  {
    points: [288, 720, 267, 800, 200, 800],
    color: { hue: 230, saturation: 42, lightness: 36 },
    midpoint: [252, 773],
  },
  {
    points: [288, 720, 323, 749, 333, 800],
    color: { hue: 231, saturation: 39, lightness: 34 },
    midpoint: [315, 756],
  },
  {
    points: [288, 720, 333, 800, 267, 800],
    color: { hue: 229, saturation: 52, lightness: 41 },
    midpoint: [296, 773],
  },
  {
    points: [323, 749, 402, 734, 333, 800],
    color: { hue: 231, saturation: 54, lightness: 41 },
    midpoint: [353, 761],
  },
  {
    points: [402, 734, 400, 800, 333, 800],
    color: { hue: 229, saturation: 45, lightness: 37 },
    midpoint: [378, 778],
  },
  {
    points: [402, 734, 459, 729, 467, 800],
    color: { hue: 231, saturation: 51, lightness: 40 },
    midpoint: [443, 754],
  },
  {
    points: [402, 734, 467, 800, 400, 800],
    color: { hue: 230, saturation: 39, lightness: 34 },
    midpoint: [423, 778],
  },
  {
    points: [459, 729, 532, 733, 533, 800],
    color: { hue: 231, saturation: 55, lightness: 42 },
    midpoint: [508, 754],
  },
  {
    points: [459, 729, 533, 800, 467, 800],
    color: { hue: 231, saturation: 63, lightness: 45 },
    midpoint: [486, 776],
  },
  {
    points: [532, 733, 613, 750, 533, 800],
    color: { hue: 230, saturation: 62, lightness: 45 },
    midpoint: [559, 761],
  },
  {
    points: [613, 750, 600, 800, 533, 800],
    color: { hue: 230, saturation: 41, lightness: 35 },
    midpoint: [582, 783],
  },
  {
    points: [613, 750, 666, 733, 667, 800],
    color: { hue: 230, saturation: 57, lightness: 43 },
    midpoint: [649, 761],
  },
  {
    points: [613, 750, 667, 800, 600, 800],
    color: { hue: 231, saturation: 55, lightness: 42 },
    midpoint: [627, 783],
  },
  {
    points: [666, 733, 743, 736, 667, 800],
    color: { hue: 229, saturation: 50, lightness: 40 },
    midpoint: [692, 756],
  },
  {
    points: [743, 736, 733, 800, 667, 800],
    color: { hue: 231, saturation: 54, lightness: 42 },
    midpoint: [714, 779],
  },
  {
    points: [743, 736, 800, 733, 800, 800],
    color: { hue: 230, saturation: 55, lightness: 42 },
    midpoint: [781, 756],
  },
  {
    points: [743, 736, 800, 800, 733, 800],
    color: { hue: 229, saturation: 46, lightness: 38 },
    midpoint: [759, 779],
  },
].map(
  (triangle): TriangleData => ({
    points: triangle.points,
    midpoint: triangle.midpoint,
    color: {
      hue: 230,
      saturation: randomNumberBetween(75, 100),
      lightness: randomNumberBetween(15, 25),
    },
  })
);

export default triangles;
