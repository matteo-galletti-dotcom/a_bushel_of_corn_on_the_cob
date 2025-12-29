# a_bushel_of_corn_on_the_cob

Animated grid of Unicode characters driven by Perlin noise, with varying size and rotation.


<img width="2000" height="2000" alt="corn-000016" src="https://github.com/user-attachments/assets/008b20c8-cc45-4449-8ca0-457fc90a9450" />


## Requirements

- [Processing 3.x or later](https://processing.org/)
- [JetBrainsMono font file](https://www.jetbrains.com/lp/mono/)

## Installation

1. Clone or download this repository
2. Place the font file in the `data` folder
3. Open the `.pde` file in Processing
4. Run the sketch

## How it Works

The sketch generates a 25x25 grid of Unicode block characters. Each character's size, rotation, and selection are determined by 3D Perlin noise, creating smooth, flowing animations over time.

## Configuration

Adjust these variables in the code to customize the output:

- `cols` and `rows` — grid dimensions (default: 25x25)
- `chars` — Unicode character palette
- `time` multiplier in `draw()` — animation speed

## License

MIT
