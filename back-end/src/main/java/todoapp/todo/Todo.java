package todoapp.todo;

import java.util.Date;
import java.util.Objects;

public class Todo {
    private long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

    protected Todo() {
    }

    public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public long getId() {
        return id;
    }

    public Todo setId(long id) {
        this.id = id;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public Todo setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Todo setDescription(String description) {
        this.description = description;
        return this;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public Todo setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
        return this;
    }

    public boolean isDone() {
        return isDone;
    }

    public Todo setDone(boolean done) {
        isDone = done;
        return this;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Todo{");
        sb.append("id=").append(id);
        sb.append(", username='").append(username).append('\'');
        sb.append(", description='").append(description).append('\'');
        sb.append(", targetDate=").append(targetDate);
        sb.append(", isDone=").append(isDone);
        sb.append('}');
        return sb.toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Todo)) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
