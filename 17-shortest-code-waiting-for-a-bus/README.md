https://www.codewars.com/kata/57070eff924f343280000015/solutions/javascript


This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task
John is Waiting for a Bus.

The Bus Station first bus starting at 06:00, Every 15 minutes a bus departure, the last bus departure time is 20:00. the bus average speed is 30 km/h.

You are given two arguments:

time:a string, the time when John start waiting. time format: hh:mm(24 hour time format)

km: a integer number, the distance between the location of John and the bus station

Please calculate when John can get on the bus. return a string with time format: hh:mm

Example
time='06:00',km=1    sc('06:00',1)='06:02'
John start waiting at 06:00, a Bus start at 06:00
Bus travel 1 km with 2 minutes, so John take on the Bus at 06:02

time='06:00',km=10   sc('06:00',10)='06:20'
John start waiting at 06:00, a Bus start at 06:00
Bus travel 10 km with 20 minutes, so John take on the Bus at 06:20

time='07:00',km=10   sc('07:00',10)='07:05'
John start waiting at 07:00, a Bus start at 06:45
Bus travel 10 km with 20 minutes, so John take on the Bus at 07:05

time='10:00',km=100  sc('10:00',100)='10:05'
John start waiting at 10:00, a Bus start at 06:45
Bus travel 100 km with 3 hours 20 minutes, so John take on the Bus at 10:05

time='09:00',km=100  sc('09:00',100)='09:20'
John start waiting at 10:00, a Bus start at 06:00
Bus travel 100 km with 3 hours 20 minutes, so John take on the Bus at 09:20

some edge case:

time='05:00',km=1    sc('05:00',1)='06:02'
John start waiting at 05:00, a Bus start at 06:00
(John gets up too early, so he should waiting a long times)
Bus travel 1 km with 2 minutes, so John take on the Bus at 06:02

time='20:00',km=1    sc('20:00',1)='20:02'
John start waiting at 20:00, a Bus start at 20:00
(John caught up with the last bus)
Bus travel 1 km with 2 minutes, so John take on the Bus at 20:02

time='20:10',km=1    sc('20:10'，1)='06:02'
John start waiting at 20:00, a Bus start at next day 06:00
(John didn't catch the last bus, he should waiting to next day)
Bus travel 1 km with 2 minutes, so John take on the Bus at 06:02