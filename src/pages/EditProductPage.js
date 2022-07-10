import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { Link } from "react-router-dom"

export default function EditProductPage() {
	return (
		<>
			<div className="mx-6 mt-3 flex items-center gap-2 border-b-2 border-gray-400 pb-3">
				<Link
					to="/product"
					className="text-indigo-800 hover:underline">
					Product
				</Link>
				<div className="text-lg">{">"}</div>
				<div className="text-gray-600">Edit</div>
			</div>

			<form className="my-4 mx-2 max-w-xl rounded border-2 border-solid border-gray-300 bg-white sm:mx-auto">
				<div
					className="border-b-solid border-b-2 border-b-gray-300 bg-gray-100 p-3 text-center text-xl
            		font-bold text-indigo-600">
					EDIT PRODUCT
				</div>
				<div className="p-6">
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Name</label>
						<input
							className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                		  focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
						/>
					</div>
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Price</label>
						<input
							className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                		  focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
						/>
					</div>
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Stock</label>
						<input
							className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                		  focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
						/>
					</div>
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Description</label>
						<div className="">
							<CKEditor
								editor={ClassicEditor}
								data=""
								onReady={(editor) => {
									// You can store the "editor" and use when it is needed.
									console.log("Editor is ready to use!", editor)
								}}
								onChange={(event, editor) => {
									const data = editor.getData()
									console.log({ event, editor, data })
								}}
								onBlur={(event, editor) => {
									console.log("Blur.", editor)
								}}
								onFocus={(event, editor) => {
									console.log("Focus.", editor)
								}}
							/>
						</div>
					</div>
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Thumbnail</label>
						<input
							type="file"
							className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                		  focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
						/>
					</div>
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Images</label>
						<input
							type="file"
							multiple
							className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                		  focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
						/>
					</div>
					<div className="mb-6">
						<label className="mb-2 block font-semibold">Category</label>
						<select
							className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                  		  focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800">
							<option>----</option>
							<option>Tshirt</option>
							<option>Shirt</option>
							<option>Jeans</option>
						</select>
					</div>
					<div className="mb-6 flex items-center gap-4">
						<input
							id="featured"
							type="checkbox"
							className="h-5 w-5"
						/>
						<label
							htmlFor="featured"
							className="inline-block font-semibold">
							Featured
						</label>
					</div>
					<div className="mb-6 flex items-center gap-4">
						<input
							id="active"
							type="checkbox"
							className="h-5 w-5"
						/>
						<label
							htmlFor="active"
							className="inline-block font-semibold">
							Active
						</label>
					</div>
					<button
						className="rounded bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-800
                 		focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-indigo-400">
						Save
					</button>
				</div>
			</form>
		</>
	)
}
