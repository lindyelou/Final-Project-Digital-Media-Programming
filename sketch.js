var x, y, p, q, v, z, a, b, c, d, e, f

function setup() {
  createCanvas(500, 500);
  background(40, 90, 200);
  x = width/2;//location
  y = height;
  p = width/3;
  q = height
  v = width/4
  z = height
  a = width/7*5
  b = height
  c = width/6
  d = height
  e = width/6*5
  f = height

   
}

function draw() {
  fill(204,105,0)
  stroke(2)
  strokeWeight(1)
  ellipse(250, 225, 150, 150)//pufferfish body
  
  fill (220)//eyes
  ellipse(275, 205, 20, 20)
  ellipse(300, 205, 20, 20)
  
  fill(0)//eyeball
  ellipse(275, 205, 10, 10)
  ellipse(300, 205, 10, 10)
  
  fill(200)//mouth
  ellipse(287, 245, 45, 45)
  
  fill(200,0,0)//lips
  ellipse(287, 245, 35, 15)
  
  fill (150, 55, 145, 85)//polka dots
  noStroke()
  ellipse (250, 175, 15, 15)
  ellipse (200, 200, 15, 15)
  ellipse (250, 275, 15, 15)
  ellipse (235, 225, 15, 15)
  ellipse (200, 245, 15, 15)
  
  
  beginShape//back fin
  strokeWeight(4)
  stroke(100, 175, 15)
  vertex (200, 225)
  vertex (150, 175)
  endShape(close)
  beginShape
  strokeWeight(4)
  vertex (200, 225)
  vertex (150, 275)
  endShape(close) 
  
  
  strokeWeight(1)//bubbles
  stroke(200);
  fill(255);
  ellipse(x, y, 15, 15);
  ellipse(p, q, 15, 15)
  ellipse(v, z, 15, 15)
  ellipse(a, b, 20, 20)
  ellipse(c, d, 20, 20)
  ellipse(e, f, 15, 15)
  
  x = x + random(-1, 1)//speed
  y = y - 2
  p = p + random(-1, 1)
  q = q - 3
  v = v + random(-1, 1)
  z = z - 1
  a = a + random(-1, 1)
  b = b - 3
  c = c + random(-1, 1)
  d = d - 2
  e = e + random(-1, 1)
  f = f - 1
  
  
  stroke(100,170,35);
  strokeWeight(3)
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    
 }
	}
	
	
  