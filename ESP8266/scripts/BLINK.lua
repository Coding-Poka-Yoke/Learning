lighton=0
pin=4
gpio.mode(pin,gpio.OUTPUT)
mytimer = tmr.create()
mytimer:register(1000, 1, function (t) 
    print("Timer Called",t)
    if lighton==0 then
        lighton=1
        gpio.write(pin,gpio.HIGH)
    else
        lighton=0
        gpio.write(pin,gpio.LOW)
    end
end)
mytimer:start()
print(mytimer==nil)
mytimer:stop()

