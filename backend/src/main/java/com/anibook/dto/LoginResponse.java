package com.anibook.dto;

public record LoginResponse(
        String token,
        String nome,
        Long id
) {}
