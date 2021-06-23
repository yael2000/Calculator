using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using calculator___server.Models;

namespace calculator___server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculationsController : ControllerBase
    {
        private readonly DBContext _context;

        public CalculationsController(DBContext context)
        {
            _context = context;
        }
        public void calculate(Calculation calculation)
        {
            switch (calculation.stringOperation)
            {
                case "+":
                    {
                        calculation.result = (Int32.Parse(calculation.firstNumber) + Int32.Parse(calculation.secondNumber)).ToString();
                        break;
                    }
                case "-":
                    {
                        calculation.result = (Int32.Parse(calculation.firstNumber) - Int32.Parse(calculation.secondNumber)).ToString();
                        break;
                    }
                case "*":
                    {
                        calculation.result = (Int32.Parse(calculation.firstNumber) * Int32.Parse(calculation.secondNumber)).ToString();
                        break;
                    }
                case "/":
                    {
                        calculation.result = (Int32.Parse(calculation.firstNumber) / Int32.Parse(calculation.secondNumber)).ToString();
                        break;
                    }
                default:
                    break;
            }
        }

        // GET: api/Calculations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Calculation>>> Getcalculations()
        {
            return await _context.calculations.ToListAsync();
        }

        // GET: api/Calculations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Calculation>> GetCalculation(int id)
        {
            var calculation = await _context.calculations.FindAsync(id);

            if (calculation == null)
            {
                return NotFound();
            }

            return calculation;
        }

        // PUT: api/Calculations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCalculation(int id, Calculation calculation)
        {
            calculate(calculation);
            calculation.id = id;

            _context.Entry(calculation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CalculationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Calculations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Calculation>> PostCalculation(Calculation calculation)
        {

            calculate(calculation);
            _context.calculations.Add(calculation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCalculation", new { id = calculation.id }, calculation);
        }

        // DELETE: api/Calculations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Calculation>> DeleteCalculation(int id)
        {
            var calculation = await _context.calculations.FindAsync(id);
            if (calculation == null)
            {
                return NotFound();
            }

            _context.calculations.Remove(calculation);
            await _context.SaveChangesAsync();

            return calculation;
        }

        private bool CalculationExists(int id)
        {
            return _context.calculations.Any(e => e.id == id);
        }
    }
}
