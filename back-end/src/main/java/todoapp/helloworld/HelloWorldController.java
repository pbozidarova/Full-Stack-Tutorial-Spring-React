package todoapp.helloworld;

import org.springframework.web.bind.annotation.*;
import todoapp.helloworld.HelloWorldBean;

//Controller
@RestController
@CrossOrigin("http://localhost:4200")
public class HelloWorldController {

    //GET
    //URI - /hello-world
    //method Hello World
    @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
    public String helloWorld(){

        return "Hello World!";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {

        return new HelloWorldBean("Hello World Bean!");
    }

    @GetMapping(path = "/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//        throw new RuntimeException("Something went wrong!");
        return new HelloWorldBean(String.format("Hello World, %s!", name));
    }
}
