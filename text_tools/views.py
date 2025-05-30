from django.views.generic import TemplateView


class AnalysesView(TemplateView):
    template_name = "text_tools/analyses.html"


class RegisterConvertorView(TemplateView):
    template_name = "text_tools/register_convertor.html"


class StringStripView(TemplateView):
    template_name = "text_tools/string_strip.html"


class StringHashView(TemplateView):
    template_name = "text_tools/string_hash.html"
