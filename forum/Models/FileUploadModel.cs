using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace forum.Models
{
    [DataContract]
    public class FileUploadModel
    {
        [DataMember(Name = "fileName")]
        public string FileName { get; set; }

        [DataMember(Name = "fileBytes")]
        public byte[] FileBytes { get; set; }
    }
}
