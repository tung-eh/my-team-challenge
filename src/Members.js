import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'

const members = [
  { name: 'Bill Mahoney', role: 'Product owner', image: photo1 },
  { name: 'Saba Cabrera', role: 'Art director', image: photo2 },
  { name: 'Shae Le', role: 'Tech lead', image: photo3 },
  { name: 'Skylah Lu', role: 'UX designer', image: photo4 },
  { name: 'Griff Richards', role: 'Developer', image: photo5 },
  { name: 'Stan John', role: 'Developer', image: photo6 },
]

const MemberItem = ({ name, role, image }) => {
  return (
    <div className="grid grid-cols-member content-start gap-2">
      <img className="w-full" src={image} alt={name} />
      <p
        className="uppercase font-serif text-xs"
        style={{ writingMode: 'vertical-rl' }}
      >
        {role}
      </p>
      <h1 className="font-bold">{name}</h1>
    </div>
  )
}

const Members = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-14  md:gap-y-10 my-20 member-list">
      {members.map((member) => (
        <MemberItem {...member} />
      ))}
    </div>
  )
}

export default Members
