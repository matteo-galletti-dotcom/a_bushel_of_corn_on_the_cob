int cols = 25;
int rows = 25;
char[] chars = "▟╾▒▉░▚▖▗▘".toCharArray();
PFont font;
float cellW, cellH;
int len;

void setup() {
  size(1000, 1000);
  font = createFont("JetBrainsMono-Regular-80.vlw", 10, true);  
  textFont(font);
  smooth();

  cellW = width / (float)cols;
  cellH = height / (float)rows;
  len = chars.length;

  fill(0, 0, 255);
  noStroke();
  textAlign(CENTER, CENTER);
}

void draw() {
  background(255);
  
  float time = frameCount * 0.015;
  float yPos = cellH * 0.5;
  float ny = 0;

  for (int y = 0; y < rows; y++) {
    float xPos = cellW * 0.5;
    float nx = 0;
    
    for (int x = 0; x < cols; x++) {
      float n = noise(nx, ny, time);
      
      int sel = (int)map(n, 0.2, 0.8, 0, len);
      if (sel < 0) sel = 0;
      else if (sel >= len) sel = len - 1;

      float size = map(n, 0, 1, cellH * 0.5, cellH * 1.5);
      float angle = map(n, 0, 1, -QUARTER_PI, QUARTER_PI);

      pushMatrix();
      translate(xPos, yPos);
      rotate(angle);
      textSize(size);
      text(chars[sel], 0, 0);
      popMatrix();

      xPos += cellW;
      nx += 0.1;
    }
    yPos += cellH;
    ny += 0.1;
  }
}
