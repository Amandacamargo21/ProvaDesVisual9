using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMC_Api.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMC_Api.Controllers
{
    [ApiController]
    [Route("API/usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly DataContext _context;

        public UsuarioController(DataContext context) => _context = context;

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            return Created("", usuario);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Usuarios.ToList());

        // [Route("deletar/{Id}")]
        // [HttpDelete]
        // public IActionResult Deletar([FromRoute] int id)
        // {
        //     Usuario usuario =
        //         _context.Usuarios.Find(id);
        //     if (usuario != null)
        //     {
        //         _context.Usuarios.Remove(usuario);
        //         _context.SaveChanges();
        //         return Ok(usuario);
        //     }
        //     return NotFound();
        // }

        // [Route("alterar")]
        // [HttpPatch]
        // public IActionResult Alterar([FromBody] Usuario usuario)
        // {
        //     _context.Usuarios.Update(usuario);
        //     _context.SaveChanges();
        //     return Ok(usuario);
        // }

        // [Route("buscar/{id}")]
        // [HttpGet]
        // public IActionResult Buscar([FromRoute] int id)
        // {
        //     //Expressão lambda
        //     Usuario usuario =
        //         _context.Usuarios.Find(id);
        //     //IF ternário
        //     return usuario != null ? Ok(usuario) : NotFound();
        // }
    }
}