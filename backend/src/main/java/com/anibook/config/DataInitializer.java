package com.anibook.config;

import com.anibook.entity.Usuario;
import com.anibook.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final UsuarioRepository repository;
    private final PasswordEncoder encoder;

    @Bean
    CommandLineRunner init() {

        return args -> {

            if(repository.findByLogin("adm_anibook").isEmpty()) {

                Usuario usuario = new Usuario();

                usuario.setLogin("adm_anibook");
                usuario.setNome("Administrador");
                usuario.setPerfil("ADMIN");

                usuario.setSenha(
                        encoder.encode("123456")
                );

                repository.save(usuario);
            }
        };
    }
}
