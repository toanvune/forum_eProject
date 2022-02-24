using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace forum.TagHelpers
{
    [HtmlTargetElement("webfoot", TagStructure = TagStructure.NormalOrSelfClosing)]
    public class FooterTag : TagHelper
    {
        [HtmlAttributeNotBound]
        [ViewContext]
        public ViewContext viewContext { get; set; }
        private IHtmlHelper htmlHelper;
        public FooterTag(IHtmlHelper _htmlHelper)
        {
            htmlHelper = _htmlHelper;
            
        }
        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            (htmlHelper as IViewContextAware).Contextualize(viewContext);
            


            output.TagName = "";
            output.Content.SetHtmlContent(await htmlHelper.PartialAsync("TagHelpers/Footer/Index"));
        }
    }
}
