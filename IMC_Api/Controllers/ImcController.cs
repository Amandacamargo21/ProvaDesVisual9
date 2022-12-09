using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMC_Api.models;
using IMC_Api.utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace IMC_Api.Controllers
{

    [ApiController]
    [Route("api/Imc")]

    public class ImcController : ControllerBase
    {
        private readonly DataContext _context;

        public ImcController(DataContext context) =>
            _context = context;


        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Imc imc)
        {
            imc.resultadoImc =
                Calculo.CalcularIMC
                (imc.Peso, imc.Altura);
            imc.Categoria = Calculo.ClassificacaoImc(imc.resultadoImc);
            _context.Imcs.Add(imc);
            _context.SaveChanges();
            return Created("", imc);
        }

        [HttpGet]
        [Route("listar")]
        public IActionResult Listar()
        {
            List<Imc> imcs = _context.Imcs.Include(u => u.Usuario).ToList();
            if (imcs.Count == 0) return NotFound();
            return Ok(imcs);
        }

        [HttpPatch]
        [Route("alterar")]
        public IActionResult Alterar([FromBody] Imc imc)
        {
            _context.Imcs.Update(imc);
            _context.SaveChanges();
            return Created("", imc);
        }
        
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar([FromRoute] int Id)
        {
            Imc imc = _context.Imcs.Find(Id);
            return imc != null ? Ok(imc) : NotFound();
        }
    }
}
