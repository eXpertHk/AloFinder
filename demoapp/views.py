from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse
# Create your views here.
def hi(request):
    return render(request,'demoapp/index.html')
try:
	from googlesearch import search
except ImportError:
	print("No module named 'google' found")

def external(request):
  inp = request.GET["query"]
  l=" in java"
  query = inp+l
  print(query)
  for j in search(query, tld="co.in", num=1, stop=1, pause=2):
    print(j)

  return redirect(j)
