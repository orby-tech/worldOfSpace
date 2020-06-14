import tkinter as tk
import time
import math
import numpy as np

arrayOfMap = np.load('map.npy')

G = 6.674484
mEarth = 5.972 * pow(10, 13)
mMoon = 7.6 * pow(10, 11 )

rEarth = 6371 
rMoon = 1737
rMoonOrbit = 385000
coefficient = 5000
xEarth = 400
yEarth = 400


root = tk.Tk()
spe = 0.5


asteroidSpeed = [0, 0]


xMoon = xEarth
yMoon = xEarth - rMoonOrbit / coefficient
moonSpeed = [3683/coefficient, 0]


def moonMoveСorrection(xMoon, yMoon, moonSpeed):
    
    correction = moonSpeed[0] / 2 / rMoonOrbit * coefficient
    moonSpeed[1] -= 2 * math.asin(correction)

    xMoon -= moonSpeed[0] * math.cos(moonSpeed[1])
    yMoon -= moonSpeed[0] * math.sin(moonSpeed[1])
    return xMoon, yMoon, moonSpeed

def accelerationOfAsteroid (coords, m):
    R = (coords[0] - coords[2]) ** 2 + (coords[1] - coords[3]) ** 2
    acceleration =  G * m / R / (coefficient ** 3)
    xAcceleration = - acceleration * (coords[0] - coords[2]) / R**0.5
    yAcceleration = - acceleration * (coords[1] - coords[3]) / R**0.5
    return xAcceleration, yAcceleration


def asteroidMoveСorrection(xAsteroid, yAsteroid, asteroidSpeed, xMoon, yMoon):
    xSpeed = asteroidSpeed[0]
    ySpeed = asteroidSpeed[1]

    coords = [ xAsteroid, yAsteroid, xMoon, yMoon ]
    xAcceleration, yAcceleration = accelerationOfAsteroid(coords, mMoon) 
    xSpeed += xAcceleration
    ySpeed += yAcceleration

    coords = [ xAsteroid, yAsteroid, xEarth, yEarth ]
    xAcceleration, yAcceleration = accelerationOfAsteroid(coords, mEarth) 
    xSpeed += xAcceleration
    ySpeed += yAcceleration

    asteroidSpeed = [xSpeed, ySpeed]
    xCorrection = xSpeed
    yCorrection = ySpeed
    xAsteroid += xCorrection
    yAsteroid += yCorrection

    return xAsteroid, yAsteroid, asteroidSpeed

canvas = tk.Canvas(root, width=1000, height=1000, borderwidth=0, highlightthickness=0)
canvas.grid()

def _create_circle(self, x, y, R, **kwargs):
    r = R / coefficient
    return self.create_oval(x-r, y-r, x+r, y+r, **kwargs)
tk.Canvas.create_circle = _create_circle



arrayOfHits = np.empty((1, 2))
for i in arrayOfMap:
    if i[2] == 1 :
        temp = np.array([i[0], i[1]])
        arrayOfHits = np.vstack((arrayOfHits, temp))


canvas.create_circle(xEarth, yEarth, rEarth * 3, fill="blue", outline="#DDD", width=4)
canvas.create_circle(xEarth, yEarth, rMoonOrbit, outline="black")

areaMoon = 15000
areaEarth = 20000
areaMax = 10**7
for i in arrayOfHits:
    earthDistance = areaMax/2
    xAsteroid = i[0]
    yAsteroid = i[1]
    asteroidSpeed = [0, 0]

    xMoon = xEarth
    yMoon = xEarth - rMoonOrbit / coefficient
    moonSpeed = [3683/coefficient, 0]
    moon = canvas.create_circle(xMoon, yMoon, rMoon * 10, fill="grey")

    asteroid = canvas.create_circle(xAsteroid, yAsteroid, rMoon * 10, fill="red")
    distanceToMoonText = canvas.create_text(200, 100, text=0, font="Verdana 14")
    distanceToEarthText = canvas.create_text(200, 150, text=0, font="Verdana 14")
    for j in range(1,1000000):
        xMoonLast, yMoonLast = xMoon, yMoon
        xMoon, yMoon, moonSpeed = moonMoveСorrection(xMoon, yMoon, moonSpeed)
        x1 = xMoon - xMoonLast
        y1 = yMoon - yMoonLast 

        xAsteroidLast, yAsteroidLast = xAsteroid, yAsteroid
        xAsteroid, yAsteroid, asteroidSpeed = asteroidMoveСorrection(xAsteroid, yAsteroid, asteroidSpeed, xMoon, yMoon)
        x2 = xAsteroid - xAsteroidLast
        y2 = yAsteroid - yAsteroidLast 
        canvas.create_circle(xAsteroid, yAsteroid, rMoon, fill="black")


        canvas.delete(distanceToMoonText)
        canvas.delete(distanceToEarthText)
        lastEarthDistance = earthDistance
        moonDistance=int(((xMoon-xAsteroid)**2 + (yMoon-yAsteroid)**2)**0.5 * coefficient // 1)
        earthDistance=int(((xEarth-xAsteroid)**2 + (yEarth-yAsteroid)**2)**0.5 * coefficient // 1)
        distanceToMoonText = canvas.create_text(200, 100, text="Distance to Moon: "+str(moonDistance)+"km", font="Verdana 14")
        distanceToEarthText = canvas.create_text(200, 150, text="Distance to Earth: "+str(earthDistance)+"km", font="Verdana 14")

        canvas.move(moon, x1, y1)
        canvas.move(asteroid, x2, y2)
        canvas.update()
        if int(moonDistance) < areaMoon:
            status = 1
            break;
        if int(earthDistance) < areaEarth or int(earthDistance + lastEarthDistance)/2 < areaEarth:
            status = 2
            break;
        if int(earthDistance) > areaMax:
            status = 0
            break;
    canvas.delete(moon)
    canvas.delete(asteroid)
    canvas.delete(distanceToMoonText)
    canvas.delete(distanceToEarthText)


root.wm_title("Circles and Arcs")
root.mainloop()