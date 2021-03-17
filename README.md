Simulator for radio controlled cars
YES! Our Company has been selected by one of the world’s best producers of radio controlled cars to 
create their new simulator which is to be used to test their cars. And you will be responsible for it!
The simulator will test various commands and see if the radio controlled cars can execute them
without hitting the wall. The company has a wide range of cars, Monster Trucks, Off-road and Sport 
track, but for now they only want to simulate the Monster Truck. The simulator should be a console 
application.
The commands that the simulator should accept is forward, back, left and right. Forward will make 
the car move forward 1 meter, back will make the car move backwards 1 meter, left will rotate the 
car 90° counter clockwise and right will rotate the car 90° clockwise.
The simulated environment should be a room. The room size should be in whole meters (no 
decimals). The simulated car can be treated as a round object with 1 meter in diameter. The image 
below shows all possible positions in a 4 meters wide and 4 meters long room, the highlighted 
coordinate [0,0] is the most southwest point in which the car will fit.
When started the simulator should:
Ask the user about the size of the room. 
This is inputted with two integers separated with a space.
Ask the user about starting position and heading of the RC car.
This is inputted with two integers and one letter separated with spaces. The letter can 
be N, S, W or E. 
Ask the user about the commands to execute.
This is inputted with all commands in series. Available commands are F, B, L or R.And then it should run the simulation to see if the car can run without hitting any walls.
Sample input:
8 6
2 3 N
FFFRFFLBB
After the simulation the simulator should output the result of the simulation. The result can either be 
successful (everything went ok) or unsuccessful (the car drove into the wall). If the simulation was 
successful it should print the end position and heading of the car. If not successful it should print an 
error describing what went wrong.
About this test
This test is used to test your skills as a developer. We will emphasize on object orientation, error 
handling, design abilities and maintainability of your code.
Even though the tests seems easy it is essential that you produce the kind of code we can expect 
from your daily work.
Feel free to make your assumptions about the solution but document these assumptions and 
anything else that you feel that we should know about your solution. Create a ReadMe.txt file for this 
and include it in your solution.
C++ / Java / C# solutions are accepted. Target platform can be Linux or Windows. If you prefer to do 
this test using another programing language please contact us before submitting your test to make 
sure that we can evaluate your solution. You can use whichever IDE that you want, however we 
would prefer if you use Visual Studio, QT Creator, Make, CMake or Eclipse.
It´s recommended that you spend around 4 to 6 hours on this test.
We are looking forward to evaluate your solution, good luck
