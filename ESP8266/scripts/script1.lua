-- a simple HTTP server
srv = net.createServer(net.TCP)
srv:listen(80, function(conn)
    conn:on("receive", function(sck, payload)
        print(payload)
        sck:send("HTTP/1.0 200 OK\r\nContent-Type: text/html\r\n\r\n<h1> Hey Guys. This is a server running in ESP8266.</h1>")
    end)
    conn:on("sent", function(sck) sck:close() end)
end)

-- connect to WiFi access point
wifi.setmode(wifi.STATION)
wifi.sta.config{ssid="ShriBala", pwd="Sadhvi0510"}
wifi.sta.connect()
print(wifi.sta.status())
print(wifi.sta.getip())
