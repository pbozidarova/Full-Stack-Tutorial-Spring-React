package todoapp.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class TodoJpaResource {

    @Autowired
    private TodoHardCodedService todoService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoJpaRepository.findByUsername(username);
        //return todoService.findAll();
    }

    //POST
    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username,
                                  @PathVariable long id){
        return todoJpaRepository.findById(id).get();
//        return todoService.findById(id);
    }

    //DELETE
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,
                                           @PathVariable long id){
        todoJpaRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    //UPDATE
    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                        @PathVariable long id,
                        @RequestBody Todo todo){
        todo.setUsername(username);

        Todo todoUpdate = todoJpaRepository.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    //CRATE
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username,
                                           @RequestBody Todo todo){

        todo.setUsername(username);

        Todo todoCreated = todoJpaRepository.save(todo);
        //location
        //Get current resourse url
        // /users/{username}/todos/{id}
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(todoCreated.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }
}
