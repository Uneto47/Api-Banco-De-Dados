import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];
  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario: Usuario = new Usuario();
    usuario.id = this.usuarios.length;
    Object.assign(usuario, createUsuarioDto);
    this.usuarios.push(usuario);

    return usuario;
  }

  findAll() {
    return this.usuarios;
  }
}
