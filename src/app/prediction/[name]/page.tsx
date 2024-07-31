const getPridictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPridictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPridictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const [ageData, genderData, countryData] = await Promise.all([
    getPridictedAge(params.name),
    getPridictedGender(params.name),
    getPridictedCountry(params.name),
  ]);

  return (
    <div>
      <div>
        <div>Person Info</div>
        <div>Age: {ageData?.age ?? 'N/A'}</div>
        <div>Gender: {genderData?.gender ?? 'N/A'}</div>
        <div>Country: {countryData?.country[0]?.country_id ?? 'N/A'}</div>
      </div>
    </div>
  );
}
