package todoapp;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

    public static void main(String[] args) {
        BCryptPasswordEncoder encode = new BCryptPasswordEncoder();

        for (int i = 0; i < 10; i++) {
            String encodedString = encode.encode("password@123#1");
            System.out.println(encodedString);
        }

        // TODO Auto-generated method stub
    }

}
