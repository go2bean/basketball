# Basketball game for microbit
from microbit import *
import random

# Define the images for the ball and the hoop
ball = Image("00000:"
             "00000:"
             "00900:"
             "00000:"
             "00000")
hoop = Image("00000:"
             "00000:"
             "90009:"
             "09990:"
             "90009")

# Define the initial position of the ball and the hoop
ball_x = 2
ball_y = 2
hoop_x = random.randint(0, 4)
hoop_y = 0

# Define the score and the time variables
score = 0
time = 30

# Display a countdown before starting the game
display.show("3")
sleep(1000)
display.show("2")
sleep(1000)
display.show("1")
sleep(1000)

# Start the game loop
while time > 0:
    # Clear the display
display.clear()
    # Display the ball and the hoop
display.set_pixel(ball_x, ball_y, 9)
display.set_pixel(hoop_x, hoop_y, 9)
    # Check if the A button is pressed
if button_a.is_pressed():
        # Move the ball to the left if possible
        if ball_x > 0:
        ball_x -= 1
        # Wait for a short time
        sleep(200)
    # Check if the B button is pressed
if button_b.is_pressed():
        # Move the ball to the right if possible
        if ball_x < 4:
        ball_x += 1
        # Wait for a short time
        sleep(200)
    # Check if the ball and the hoop are in the same position
if ball_x == hoop_x and ball_y == hoop_y:
        # Increase the score by one
score += 1
        # Display a smiley face for a short time
        display.show(Image.HAPPY)
sleep(500)
        # Move the hoop to a new random position
hoop_x = random.randint(0, 4)
hoop_y = random.randint(0, 2)
    # Decrease the time by one second
time -= 1
    # Wait for one second
    sleep(1000)

# Display the final score and a message
display.scroll("Score: " + str(score))
if score == 0:
    display.scroll("Better luck next time!")
elif score < 5:
display.scroll("Not bad!")
elif score < 10:
display.scroll("Good job!")
else:
display.scroll("You are awesome!")