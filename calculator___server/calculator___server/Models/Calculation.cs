using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace calculator___server.Models
{
    public class Calculation
    {[Key]
        public int id { get; set; }
        [Column(TypeName="nvarchar(10)")]
        public string firstNumber { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string secondNumber { get; set; }
        [Column(TypeName = "nvarchar(1)")]
        public string stringOperation { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string result { get; set; }
    }
}
