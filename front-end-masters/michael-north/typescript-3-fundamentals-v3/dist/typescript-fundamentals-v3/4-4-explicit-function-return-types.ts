// always define explicit return types for ur functions, so u issues and errors
// closer to the problem int he function, not at the call site.

export async function getData(url: string): Promise<{ properties: string[] }> {
  const resp = await fetch(url);

  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
}

function loadData() {
  getData("https://example.com").then((result) => {
    console.log(result.properties.join(", "));
  });
}
