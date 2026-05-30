package com.anibook.controller;

import com.anibook.dto.LoginRequest;
import com.anibook.dto.LoginResponse;
import com.anibook.entity.Usuario;
import com.anibook.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UsuarioRepository repository;
    private final PasswordEncoder encoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request) {

        Usuario usuario = repository
                .findByLogin(request.login())
                .orElse(null);

        if (usuario == null) {
            return ResponseEntity.status(401)
                    .body("Usuário não encontrado");
        }

        if (!encoder.matches(
                request.senha(),
                usuario.getSenha())) {

            return ResponseEntity.status(401).body("Senha inválida");
        }

        String token = UUID.randomUUID().toString();

        return ResponseEntity.ok(new LoginResponse(token, usuario.getNome(), usuario.getId()));
    }
}
